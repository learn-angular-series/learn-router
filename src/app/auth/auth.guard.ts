import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad,CanActivate,CanActivateChild{
    /**
     * 验证是否有权限加载一个异步模块
     */
    canLoad(){
        //在真实的应用里面需要写一个Service到后端去验证权限
        return true;
    }

    /**
     * 验证路由是否可以激活
     */
    canActivate(){
        //在真实的应用里面需要写一个Service到后端去验证权限
        return true;
    }

    /**
     * 验证子路由是否可以激活
     */
    canActivateChild(){
        //在真实的应用里面需要写一个Service到后端去验证权限
        return true;
    }
}