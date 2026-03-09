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
    { name: 'Mesa de Roble', description: 'Mesa robusta de roble macizo, perfecta para comedores.', price: '$450.00', imageUrls: ['assets/images/1.jpeg'], category: 'Muebles' },
    { name: 'Silla Artesanal', description: 'Silla de madera tallada a mano con diseño clásico.', price: '$120.00', imageUrls: ['assets/images/2.jpeg'], category: 'Muebles' },
    { name: 'Estante de Pared', description: 'Estante flotante de pino para sala o cocina.', price: '$85.00', imageUrls: ['assets/images/3.jpeg'], category: 'Muebles' },
    { name: 'Armario Rural', description: 'Armario de almacenamiento con puertas de madera.', price: '$380.00', imageUrls: ['assets/images/4.jpeg'], category: 'Muebles' },
    { name: 'Banco de Trabajo', description: 'Banco resistente para taller o taller casero.', price: '$95.00', imageUrls: ['assets/images/5.jpeg'], category: 'Muebles' },
    { name: 'Mesa de Noche', description: 'Mesa de noche con cajón integrado.', price: '$150.00', imageUrls: ['assets/images/6.jpeg'], category: 'Muebles' },
    { name: 'Puerta Principal', description: 'Puerta de entrada de madera maciza con bisagras.', price: '$320.00', imageUrls: ['assets/images/7.jpeg'], category: 'Puertas' },
    { name: 'Puerta de Dormitorio', description: 'Puerta interior con diseño tradicional.', price: '$180.00', imageUrls: ['assets/images/8.jpeg'], category: 'Puertas' },
    { name: 'Puerta de Vidrio', description: 'Puerta con panel de vidrio templado.', price: '$280.00', imageUrls: ['assets/images/9.jpeg'], category: 'Puertas' },
    { name: 'Puerta Corredera', description: 'Sistema de puerta corredera de madera.', price: '$420.00', imageUrls: ['assets/images/10.jpeg'], category: 'Puertas' },
    { name: 'Portón de Entrada', description: 'Portón grande para jardín o patio.', price: '$550.00', imageUrls: ['assets/images/11.jpeg'], category: 'Puertas' },
    { name: 'Puerta de Baño', description: 'Puerta interior resistente a humedad.', price: '$165.00', imageUrls: ['assets/images/12.jpeg'], category: 'Puertas' },
    { name: 'Ventana Clásica', description: 'Ventana de madera con vidrios sencillos.', price: '$145.00', imageUrls: ['assets/images/13.jpeg'], category: 'Ventanas' },
    { name: 'Ventana Persiana', description: 'Ventana con sistema de persiana de madera.', price: '$210.00', imageUrls: ['assets/images/14.jpeg'], category: 'Ventanas' },
    { name: 'Ventana Modular', description: 'Ventana de dos hojas oscilobatientes.', price: '$195.00', imageUrls: ['assets/images/15.jpeg'], category: 'Ventanas' },
    { name: 'Ventana de Techo', description: 'Ventana para tragaluz o claraboya.', price: '$340.00', imageUrls: ['assets/images/16.jpeg'], category: 'Ventanas' },
    { name: 'Ventana Corrediza', description: 'Ventana de aluminum con riel de madera.', price: '$225.00', imageUrls: ['assets/images/17.jpeg'], category: 'Ventanas' },
    { name: 'Ventana Ornamental', description: 'Ventana con diseño decorativo superior.', price: '$180.00', imageUrls: ['assets/images/18.jpeg'], category: 'Ventanas' },
    { name: 'Marco Decorativo', description: 'Marco de madera tallada para pared.', price: '$45.00', imageUrls: ['assets/images/19.jpeg'], category: 'Decoración' },
    { name: 'Reloj de Pared', description: 'Reloj artesanal de madera con números.', price: '$78.00', imageUrls: ['assets/images/20.jpeg'], category: 'Decoración' },
    { name: 'Letras de Madera', description: 'Letras decorativas personalizadas.', price: '$35.00', imageUrls: ['assets/images/21.jpeg'], category: 'Decoración' },
    { name: 'Cajas Artesanales', description: 'Set de cajas de almacenamiento pequeñas.', price: '$55.00', imageUrls: ['assets/images/22.jpeg'], category: 'Decoración' },
    { name: 'Tabla de Cocina', description: 'Tabla de cortar de madera de olivo.', price: '$42.00', imageUrls: ['assets/images/23.jpeg'], category: 'Decoración' }
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
