import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { AuthService } from "./services/auth/auth.service";
import { JwtStrategy } from "./services/auth/strategies/jwt/jwt.strategy";
import { JwtService } from "./services/jwt/jwt.service";
import { PasswordService } from "./services/password/password.service";
import { UserService } from "./services/user/user.service";
import { UserController } from "./user.controller";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    AuthService,
    UserService,
    PasswordService,
    JwtService,
    JwtStrategy,
  ],
})
export class UserModule {}
