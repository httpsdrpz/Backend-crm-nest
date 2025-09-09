import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./register.dto";
import { LoginDto } from "./login.dto";

@Controller('auth')
export class AuthController{
    constructor( private reandonly authService: AuthService){}

    //Registro 

    @Post('register')
    async register(@Body() dto: RegisterDto){
        return this.authService.register(dto);
    }

    // Login

    @Post('login')
        async login(@Body() dto: LoginDto){
            return this.authService.login(dto);
        }
    
}