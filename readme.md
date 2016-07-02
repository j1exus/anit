#Description
This is small jQuery plugin integrates amazing libraries [Animate.css](https://github.com/daneden/animate.css/) and [Waypoints](https://github.com/imakewebthings/waypoints) into one interface that operates html5 data-* parametres. You do not longer need to add animate.css classes to your project (which makes it more complicated to understand) and setup waypionts using js. This library wraps all needed features of those libraries into data-* parameters.

#Installation
Include anit.min.js after [jQUery](https://github.com/jquery/jquery) and [Waypoints](https://github.com/imakewebthings/waypoints) like
<script src="anit.min.js"></script>
Do not forget to include [Animate.css](https://github.com/daneden/animate.css/) library.

#Usage
Simply add data-* to your html element:

data-animatecss="ANIMATION" - required parameter to assign animation to element. ANIMATION - name of one animate.css classes.
data-animatecss-infinite - add this parameter if you want to loop your animation
data-animatecss-waypoint - add waypoint to the element
data-animatecss-offset="PARAM" - add offset. PARAM - px or % value. To read more about it look at official waypoints documentation
data-animatecss-destroy - add this parameter to trigger waypoint only once
data-animatecss-opacity1="X,Y" - add start opacity (X) and final (Y). X,Y - values between [0,1]
data-animatecss-direction="DIRECTION" - add this parameter with value 'up' or 'down' to make waypoint work only in provided direction

#Example
<div class="block" data-animatecss="fadeInRight" data-animatecss-infinite data-animatecss-waypoint data-animatecss-offset="50" data-animatecss-destroy data-animatecss-opacity="0.2,1" data-animatecss-direction="up"></div>

#Licence
Copyright (c) 2016 Aleksey Aksiutik. Licensed under the [MIT license](https://github.com/j1exus/anit/blob/master/licenses.txt).