/**
 * Created by Rikipon on 2016/11/13.
 */

"use strict";

var Player = function(){
    this.playerDom = document.getElementById("player");

    this.play = function(url){
        if (url) {
            this.playerDom.pause();
            this.playerDom.src = url;
        }
        this.playerDom.play();
        return this;
    };

    this.pause = function(){
        this.playerDom.pause();
        return this;
    };
    this.getMp3Url = function(id){
        $.ajax({
            url:"api/song/"+id,
            type:"GET",
            dataType:"JSON",
            success:function(data){
                console.log(data)
            }
        })
    }

};
var player = new Player();