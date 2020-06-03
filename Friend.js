class Friend extends BaseClass {
  constructor(x, y){
    super(x,y,50,60);
    this.image = loadImage("sprites/Friend.png");

    /*Extra Images (for background only)*/
    this.sun = loadImage("sprites/sun.png");
    this.cloud1 = loadImage("sprites/clouds.png");
    this.cloud2 = loadImage("sprites/clouds.png");
    this.cloud3 = loadImage("sprites/clouds.png");
    this.cloud4 = loadImage("sprites/clouds.png");
    this.grass1 = loadImage("sprites/grass.png");
    /* X--X--X--X--X--X---X--X--X--X--X--X */

    this.Visibility = 255;
  }
  display(){
     /*  Displaying the Extra Images */
     image(this.sun,310,20,80,70);
     image(this.cloud1,10,10,160,100);
     image(this.cloud2,500,10,200,100);
     image(this.cloud3,700,10,200,100);
     image(this.cloud4,1000,10,200,100);
     image(this.grass1,48,145,160,100);
     /* X--X--X--X--X--X---X--X--X--X */

    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,60);
      pop();
    }
  }
};