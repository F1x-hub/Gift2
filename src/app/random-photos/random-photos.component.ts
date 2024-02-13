import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-photos',
  templateUrl: './random-photos.component.html',
  styleUrls: ['./random-photos.component.css']
})
export class RandomPhotosComponent implements OnInit {
  photos: any[] = [];
  score: number = 0;
  timeLeft: number = 60;
  interval: any;
  showLargePhoto: boolean = false;
  ngOnInit() {
    this.generatePhotos();
    this.startGame();
    
  }

  startGame() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        if (this.score === 50) {
          clearInterval(this.interval); // Stop the timer when score reaches 50
        }
      } else {
        clearInterval(this.interval);
        alert('Game Over! Your final score is: ' + this.score);
      }
    }, 1000);
  }

  generatePhotos() {
    const photoPaths = [
      'https://p16-capcut-sign-va.ibyteimg.com/tos-maliva-v-be9c48-us/oYSnE0TDAe1NAITE9CekDVDnQJJFABGMb15pCW~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1737368305&x-signature=CTih2xWL3pYWpyU%2BM10B1j%2B5ltI%3D',
      'data:image/jpeg;base64,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',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86470030-6a54-448f-aea8-5c3ad27708f4/dfy4fvg-8d734535-d7e6-44de-8ba4-4a84dd1ce22b.jpg/v1/fill/w_1280,h_1628,q_75,strp/nifty_from_hazbin_hotel_by_emthehumandrawsstuff_dfy4fvg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYyOCIsInBhdGgiOiJcL2ZcLzg2NDcwMDMwLTZhNTQtNDQ4Zi1hZWE4LTVjM2FkMjc3MDhmNFwvZGZ5NGZ2Zy04ZDczNDUzNS1kN2U2LTQ0ZGUtOGJhNC00YTg0ZGQxY2UyMmIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4vG-fNPimBgoBawxhVoksOhlrJJyUo1b87VRvtf7qL4',
      'https://static.zerochan.net/Lucifer.%28Hazbin%29.full.3832629.jpg'
      // Add more paths as needed
    ];

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * photoPaths.length);
      const randomX = Math.floor(Math.random() * (window.innerWidth - 120)); // Adjust size of photos
      const randomY = Math.floor(Math.random() * (window.innerHeight - 280)); // Adjust size of photos
      this.photos.push({ id: i, path: photoPaths[randomIndex], x: randomX, y: randomY, visible: true });
    }
  }

  handleClick(photo: any) {
    if (photo.visible) {
      this.score++;
      if (this.score === 50) {
        this.showLargePhoto = true; // Display large photo when score reaches 50
      }
      photo.visible = false;
      const randomX = Math.floor(Math.random() * (window.innerWidth - 120)); // Adjust size of photos
      const randomY = Math.floor(Math.random() * (window.innerHeight - 280)); // Adjust size of photos
      photo.x = randomX;
      photo.y = randomY;
      setTimeout(() => {
        photo.visible = true;
      }, 1000); // Change visibility after 1 second
    } else {
      this.score--;
    }
  }
  
}
