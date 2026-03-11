import { Component, signal, computed, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Material {
  name: string;
  description: string;
  price: string;
  imageUrls: string[];
  category: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Herrajes Nelson Carrillo');
  protected readonly selectedMaterial = signal<Material | null>(null);
  protected readonly searchQuery = signal('');
  protected readonly selectedCategory = signal<string>('Todos');
  protected readonly categories = signal<string[]>(['Todos', 'Muebles', 'Puertas', 'Ventanas', 'Decoración']);

  protected readonly materials: Material[] = [
    { name: 'Correderas full extensión tráfico semipesado', description: '', price: '$450.00', imageUrls: ['assets/images/1.jpeg'], category: 'Muebles' },
    { name: 'Bisagras semiparche y parche', description: '', price: '$ 2.535', imageUrls: ['assets/images/3.jpeg'], category: 'Puertas' },
    { name: 'Soporte para tubo entrepaño', description: '', price: '$ 2.535', imageUrls: ['assets/images/4.jpeg'], category: 'Muebles' },
    { name: 'Brazo hidráulico cierre lento', description: '', price: '$ 4.125', imageUrls: ['assets/images/5.jpeg'], category: 'Muebles' },
    { name: 'Manijas de 12.8 de largo', description: '', price: '$ 1.625', imageUrls: ['assets/images/6.jpeg'], category: 'Puertas' },
    { name: 'Tubo ovalado para colgar ropa', description: '', price: '$ 7.475', imageUrls: ['assets/images/7.jpeg'], category: 'Muebles' },
    { name: 'Tornillo de 1"1/2 / 1" / 2"', description: '', price: '$ 21 - $ 20 - $ 23.6', imageUrls: ['assets/images/8.jpeg'], category: 'Puertas' },
    { name: 'Chazos de 1/4 / Chazos 3/16', description: '', price: '$ 17 - $ 17', imageUrls: ['assets/images/9.jpeg'], category: 'Puertas' },
    { name: 'Adhesivo sobre', description: '', price: '$ 1500', imageUrls: ['assets/images/10.jpeg'], category: 'Muebles' },
    { name: 'Cubertero de 53*47 / Cubertero de 33*46 / Cubertero de 23*47', description: '', price: '53*47: $ 38.000 · 33*46: $ 29.000 · 23*47: $ 33.500', imageUrls: ['assets/images/11.jpeg'], category: 'Muebles' },
    { name: 'Platero de 60 cm / Platero de 70 cm / Platero de 89 cm', description: '', price: 'Platero 60 cm: $ 33.125 · Platero 70 cm: $ 36.000 · Platero 89 cm: $ 48.000', imageUrls: ['assets/images/12.jpeg'], category: 'Muebles' },
    { name: 'Resorte para puertas', description: '', price: '$1.995', imageUrls: ['assets/images/14.jpeg'], category: 'Puertas' },
    { name: 'Bisagras Omega para puertas', description: '', price: '$ 1.600', imageUrls: ['assets/images/13.jpeg'], category: 'Puertas' },
    { name: 'Cazuela para puertas corredizas de clóset', description: '', price: '$ 1.040', imageUrls: ['assets/images/15.jpeg'], category: 'Puertas' },
    { name: 'Riel de 2 metros', description: '', price: '$ 32.200', imageUrls: ['assets/images/17.jpeg'], category: 'Puertas' },
    { name: 'L de 3/4 / L de 1/4', description: '', price: 'L de 3/4: $ 190 · L de 1/4: $ 500', imageUrls: ['assets/images/18.jpeg'], category: 'Puertas' },
    { name: 'Bisagras cierre lento 180 grados', description: '', price: '$55.00', imageUrls: ['assets/images/22.jpeg'], category: 'Puertas' },
    { name: 'Chapa pomo metal', description: '', price: '$ 9.500', imageUrls: ['assets/images/24.jpeg'], category: 'Puertas' },
    { name: 'Madecanto en 4.4 mm / Madecanto en 19 mm / Madecanto flexible', description: '', price: '4.4 mm: $ 1.100 · 19 mm: $ 650', imageUrls: ['assets/images/25.jpeg'], category: 'Puertas' },
    { name: 'Visagra 135 grado', description: '', price: '$ 6.100', imageUrls: ['assets/images/23.jpeg'], category: 'Puertas' }
  ];

  protected readonly filteredMaterials = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const category = this.selectedCategory();

    return this.materials.filter(material => {
      const matchesSearch = !query || 
        material.name.toLowerCase().includes(query) || 
        material.description.toLowerCase().includes(query);
      const matchesCategory = category === 'Todos' || material.category === category;
      return matchesSearch && matchesCategory;
    });
  });

  @HostListener('document:keydown.escape')
  protected onEscapeKey() {
    this.selectedMaterial.set(null);
  }

  protected setCategory(category: string) {
    this.selectedCategory.set(category);
  }

  protected onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }

  protected contactMaterial(material: Material) {
    const message = encodeURIComponent(
      `Hola, vi ${material.name} en el catálogo y me interesa saber más detalles acerca del precio.`
    );
    window.open(`https://wa.me/573153292436?text=${message}`, '_blank');
  }
}
