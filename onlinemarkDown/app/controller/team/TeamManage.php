<?php


namespace app\controller\team;


use app\middleware\PostCheck;
use app\Utils\TeamUtils\TeamUtils;

class TeamManage
{
    //控制器调用中间件方法:
    protected $middleware = [PostCheck::class];

    public static function createTeam()
    {
        $team_name = request()->param('team_name');
        $creator_name = request()->param('creator_name');
        return TeamUtils::createTeam($team_name, $creator_name);
    }

    public static function disbandTeam()
    {
        $team_name = request()->param('team_name');
        $team_id = request()->param('team_id');
        $username = request()->param('username');
        return TeamUtils::disband($team_name, $team_id, $username);
    }

    public static function joinTeam()
    {
        $team_id = request()->param('team_id');
        $username = request()->param('username');
        return TeamUtils::join($team_id, $username);
    }

    public static function exitTeam()
    {
        $team_id = request()->param('team_id');
        $username = request()->param('username');
        return TeamUtils::exit($team_id, $username);
    }

    public static function teamInfo()
    {
        $username = request()->param('username');
        return TeamUtils::getAllTeamInfo($username);
    }


}