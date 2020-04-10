import { Resolver, Query, Mutation, Arg, ObjectType, Field, Ctx, UseMiddleware } from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { User } from './entity/User';
import { MyContext } from './MyContext';
import { createRefreshToken, createAccessToken } from './authentication/tokens';
import { isAuth } from './authentication/isAuth';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  @UseMiddleware(isAuth)
  amILoggedIn(@Ctx() { payload }: MyContext) {
    return `your user id is ${payload!.userId}`;
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
      console.error(error);
      return false;
    }
  }

  @Mutation(() => LoginResponse)
  async loginUser(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { res }: MyContext
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('No user found');
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Successful login

    res.cookie('jid', createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
    };
  }
}
