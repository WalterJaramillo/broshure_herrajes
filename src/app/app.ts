import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Material {
  name: string;
  description: string;
  price: string;
  imageUrls: string[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Carpintería Pastoril');

  protected readonly selectedMaterial = signal<Material | null>(null);

  protected readonly materials: Material[] = [
    {
      name: 'Material 1',
      description: 'Descripción del material 1.',
      price: '$10.00',
      imageUrls: ['assets/images/1.jpeg']
    },
    {
      name: 'Material 2',
      description: 'Descripción del material 2.',
      price: '$10.00',
      imageUrls: ['assets/images/2.jpeg']
    },
    {
      name: 'Material 3',
      description: 'Descripción del material 3.',
      price: '$10.00',
      imageUrls: ['assets/images/3.jpeg']
    },
    {
      name: 'Material 4',
      description: 'Descripción del material 4.',
      price: '$10.00',
      imageUrls: ['assets/images/4.jpeg']
    },
    {
      name: 'Material 5',
      description: 'Descripción del material 5.',
      price: '$10.00',
      imageUrls: ['assets/images/5.jpeg']
    },
    {
      name: 'Material 6',
      description: 'Descripción del material 6.',
      price: '$10.00',
      imageUrls: ['assets/images/6.jpeg']
    },
    {
      name: 'Material 7',
      description: 'Descripción del material 7.',
      price: '$10.00',
      imageUrls: ['assets/images/7.jpeg']
    },
    {
      name: 'Material 8',
      description: 'Descripción del material 8.',
      price: '$10.00',
      imageUrls: ['assets/images/8.jpeg']
    },
    {
      name: 'Material 9',
      description: 'Descripción del material 9.',
      price: '$10.00',
      imageUrls: ['assets/images/9.jpeg']
    },
    {
      name: 'Material 10',
      description: 'Descripción del material 10.',
      price: '$10.00',
      imageUrls: ['assets/images/10.jpeg']
    },
    {
      name: 'Material 11',
      description: 'Descripción del material 11.',
      price: '$10.00',
      imageUrls: ['assets/images/11.jpeg']
    },
    {
      name: 'Material 12',
      description: 'Descripción del material 12.',
      price: '$10.00',
      imageUrls: ['assets/images/12.jpeg']
    },
    {
      name: 'Material 13',
      description: 'Descripción del material 13.',
      price: '$10.00',
      imageUrls: ['assets/images/13.jpeg']
    },
    {
      name: 'Material 14',
      description: 'Descripción del material 14.',
      price: '$10.00',
      imageUrls: ['assets/images/14.jpeg']
    },
    {
      name: 'Material 15',
      description: 'Descripción del material 15.',
      price: '$10.00',
      imageUrls: ['assets/images/15.jpeg']
    },
    {
      name: 'Material 16',
      description: 'Descripción del material 16.',
      price: '$10.00',
      imageUrls: ['assets/images/16.jpeg']
    },
    {
      name: 'Material 17',
      description: 'Descripción del material 17.',
      price: '$10.00',
      imageUrls: ['assets/images/17.jpeg']
    },
    {
      name: 'Material 18',
      description: 'Descripción del material 18.',
      price: '$10.00',
      imageUrls: ['assets/images/18.jpeg']
    },
    {
      name: 'Material 19',
      description: 'Descripción del material 19.',
      price: '$10.00',
      imageUrls: ['assets/images/19.jpeg']
    },
    {
      name: 'Material 20',
      description: 'Descripción del material 20.',
      price: '$10.00',
      imageUrls: ['assets/images/20.jpeg']
    },
    {
      name: 'Material 21',
      description: 'Descripción del material 21.',
      price: '$10.00',
      imageUrls: ['assets/images/21.jpeg']
    },
    {
      name: 'Material 22',
      description: 'Descripción del material 22.',
      price: '$10.00',
      imageUrls: ['assets/images/22.jpeg']
    },
    {
      name: 'Material 23',
      description: 'Descripción del material 23.',
      price: '$10.00',
      imageUrls: ['assets/images/23.jpeg']
    }
  ];
}
