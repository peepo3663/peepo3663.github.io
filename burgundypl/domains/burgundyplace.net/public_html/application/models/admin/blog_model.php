<?php
class Blog_model extends Model {

    var $title   = '';
    var $content = '';
    var $date    = '';

    function Blog_model()
    {
        parent::Model();
    }
    
    function test()
    {
		echo 'model/a';
    }

}
?>