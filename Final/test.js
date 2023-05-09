// potential droppable that we're flying over right now
ball.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

  ball.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker1.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker1.style.position = 'absolute';
  sticker1.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker1);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker1.style.left = pageX - sticker1.offsetWidth / 2 + 'px';
    sticker1.style.top = pageY - sticker1.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker1.onmouseup = null;
  };

  sticker1.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker2.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker2.style.position = 'absolute';
  sticker2.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker2);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker2.style.left = pageX - sticker2.offsetWidth / 2 + 'px';
    sticker2.style.top = pageY - sticker2.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker2.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker2.onmouseup = null;
  };

  sticker2.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker3.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker3.style.position = 'absolute';
  sticker3.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker3);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker3.style.left = pageX - sticker3.offsetWidth / 2 + 'px';
    sticker3.style.top = pageY - sticker3.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker3.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker3.onmouseup = null;
  };

  sticker3.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker3.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker3.style.position = 'absolute';
  sticker3.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker3);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker3.style.left = pageX - sticker3.offsetWidth / 2 + 'px';
    sticker3.style.top = pageY - sticker3.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker3.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker3.onmouseup = null;
  };

  sticker3.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker3.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker3.style.position = 'absolute';
  sticker3.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker3);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker3.style.left = pageX - sticker3.offsetWidth / 2 + 'px';
    sticker3.style.top = pageY - sticker3.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker3.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker3.onmouseup = null;
  };

  sticker3.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker4.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker4.style.position = 'absolute';
  sticker4.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker4);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker4.style.left = pageX - sticker4.offsetWidth / 2 + 'px';
    sticker4.style.top = pageY - sticker4.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker4.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker4.onmouseup = null;
  };

  sticker4.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker5.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker5.style.position = 'absolute';
  sticker5.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker5);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker5.style.left = pageX - sticker5.offsetWidth / 2 + 'px';
    sticker5.style.top = pageY - sticker5.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker5.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker5.onmouseup = null;
  };

  sticker5.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker6.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker6.style.position = 'absolute';
  sticker6.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker6);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker6.style.left = pageX - sticker6.offsetWidth / 2 + 'px';
    sticker6.style.top = pageY - sticker6.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker6.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker6.onmouseup = null;
  };

  sticker6.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker7.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker7.style.position = 'absolute';
  sticker7.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker3);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker7.style.left = pageX - sticker7.offsetWidth / 2 + 'px';
    sticker7.style.top = pageY - sticker7.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker7.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker7.onmouseup = null;
  };

  sticker7.ondragstart = function() {
    return false;
  };

};


// potential droppable that we're flying over right now
sticker8.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker8.style.position = 'absolute';
  sticker8.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker8);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker8.style.left = pageX - sticker8.offsetWidth / 2 + 'px';
    sticker8.style.top = pageY - sticker8.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker8.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker8.onmouseup = null;
  };

  sticker8.ondragstart = function() {
    return false;
  };

};

// potential droppable that we're flying over right now
sticker9.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker9.style.position = 'absolute';
  sticker9.style.zIndex = 1000;

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker9);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker9.style.left = pageX - sticker9.offsetWidth / 2 + 'px';
    sticker9.style.top = pageY - sticker9.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker9.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker9.onmouseup = null;
  };

  sticker9.ondragstart = function() {
    return false;
  };

};


// potential droppable that we're flying over right now
sticker10.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker10.style.position = 'absolute';
  sticker10.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker10);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker10.style.left = pageX - sticker10.offsetWidth / 2 + 'px';
    sticker10.style.top = pageY - sticker10.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker10.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker10.onmouseup = null;
  };

  sticker10.ondragstart = function() {
    return false;
  };

};


// potential droppable that we're flying over right now
sticker10.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker10.style.position = 'absolute';
  sticker10.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker10);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker10.style.left = pageX - sticker10.offsetWidth / 2 + 'px';
    sticker10.style.top = pageY - sticker10.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker10.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker10.onmouseup = null;
  };

  sticker10.ondragstart = function() {
    return false;
  };

};


// potential droppable that we're flying over right now
sticker11.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker11.style.position = 'absolute';
  sticker11.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker11);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker11.style.left = pageX - sticker11.offsetWidth / 2 + 'px';
    sticker11.style.top = pageY - sticker11.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker11.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker11.onmouseup = null;
  };

  sticker11.ondragstart = function() {
    return false;
  };

};


// potential droppable that we're flying over right now
sticker12.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker12.style.position = 'absolute';
  sticker12.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker12);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker12.style.left = pageX - sticker12.offsetWidth / 2 + 'px';
    sticker12.style.top = pageY - sticker12.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker12.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker12.onmouseup = null;
  };

  sticker12.ondragstart = function() {
    return false;
  };

};


// potential droppable that we're flying over right now
sticker13.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker13.style.position = 'absolute';
  sticker13.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker13);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker13.style.left = pageX - sticker13.offsetWidth / 2 + 'px';
    sticker13.style.top = pageY - sticker13.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker13.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker13.onmouseup = null;
  };

  sticker13.ondragstart = function() {
    return false;
  };

};


// potential droppable that we're flying over right now
sticker14.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker14.style.position = 'absolute';
  sticker14.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker14);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker14.style.left = pageX - sticker14.offsetWidth / 2 + 'px';
    sticker14.style.top = pageY - sticker14.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker14.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker14.onmouseup = null;
  };

  sticker14.ondragstart = function() {
    return false;
  };

};



// potential droppable that we're flying over right now
sticker15.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker15.style.position = 'absolute';
  sticker15.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker15);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker15.style.left = pageX - sticker15.offsetWidth / 2 + 'px';
    sticker15.style.top = pageY - sticker15.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker15.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker15.onmouseup = null;
  };

  sticker15.ondragstart = function() {
    return false;
  };

};


// potential droppable that we're flying over right now
sticker16.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker16.style.position = 'absolute';
  sticker16.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker16);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker16.style.left = pageX - sticker16.offsetWidth / 2 + 'px';
    sticker16.style.top = pageY - sticker16.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker16.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker16.onmouseup = null;
  };

  sticker16.ondragstart = function() {
    return false;
  };

};

// potential droppable that we're flying over right now
sticker15.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker17.style.position = 'absolute';
  sticker17.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker15);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker17.style.left = pageX - sticker17.offsetWidth / 2 + 'px';
    sticker17.style.top = pageY - sticker17.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker17.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker17.onmouseup = null;
  };

  sticker17.ondragstart = function() {
    return false;
  };

};

// potential droppable that we're flying over right now
sticker18.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker18.style.position = 'absolute';
  sticker18.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker18);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker18.style.left = pageX - sticker18.offsetWidth / 2 + 'px';
    sticker18.style.top = pageY - sticker18.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker18.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker18.onmouseup = null;
  };

  sticker18.ondragstart = function() {
    return false;
  };

};

// potential droppable that we're flying over right now
sticker19.onmousedown = function(event) {
  // (1) prepare to moving: make absolute and on top by z-index
  sticker19.style.position = 'absolute';
  sticker19.style.zIndex = 1000;


  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(sticker19);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    sticker19.style.left = pageX - sticker19.offsetWidth / 2 + 'px';
    sticker19.style.top = pageY - sticker19.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  sticker19.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sticker19.onmouseup = null;
  };

  sticker19.ondragstart = function() {
    return false;
  };

};


//print function//

const printBtn = document.getElementById('print');

printBtn.addEventListener('click', function() {
  print();
});


