<?php
declare (strict_types = 1);

namespace app\middleware;

use think\facade\Request;

//过滤除post外请求方式
class PostCheck
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     */
    public function handle($request, \Closure $next)
    {
        if (Request::isPost()||Request::isAjax())
        return $next($request);
        else return response('No hacking No dying');
    }
}
