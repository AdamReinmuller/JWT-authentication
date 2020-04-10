import { Resolver, Query, Mutation, Arg, ObjectType, Field } from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from './entity/User';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'hi';
  }

  @Query(() => [User])
  getAllUsers() {
    return User.find();
  }

  @Mutation(() => Boolean)
  async registerUser(@Arg('email') email: string, @Arg('password') password: string) {
    const hashedPassword = await hash(password, 12);

    try {
      await User.insert({
        email,
        password: hashedPassword,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Mutation(() => LoginResponse)
  async loginUser(@Arg('email') email: string, @Arg('password') password: string): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('No user found');
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Successful login
    return {
      accessToken: sign({ userId: user.id }, 'secretKey', { expiresIn: '15m' }),
    };
  }
}
