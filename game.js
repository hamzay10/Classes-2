class Game
{
    constructor(name, genre, releaseDate)
    {
      this.name = name
      this.genre = genre
      this.releaseDate = releaseDate  
    }
    display(){
        console.log(this.name)
        console.log(this.genre)
        console.log(this.releaseDate)
    }

}