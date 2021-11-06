<?php


namespace app\controller\verify;


use app\Utils\DbUtils\UserUtils;

class Login
{
    public function index()
    {
        if (!request()->isPost())
            return "methoderror";
        $username = request()->param('username');
        $password = request()->param('password');
        return UserUtils::checkPassword($username,$password);
    }
}