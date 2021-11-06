<?php
declare (strict_types = 1);

namespace app\validate;

use think\Validate;

class TeamNameCheck extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名' =>  ['规则1','规则2'...]
     *
     * @var array
     */
    protected $rule = [
        'team_name' => 'require|length:1,20|alphaDash', //1-20个字符以内，英文数字下划线破折号
    ];

    protected $message = [
    ];
}
