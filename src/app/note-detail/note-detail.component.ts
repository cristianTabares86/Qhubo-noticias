import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../../model/Note';

@Component({
   selector: 'app-note-detail',
   templateUrl: './note-detail.component.html',
   styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
   note: Note = {} as Note;
   notes: Note[] = [
      {
         id: 1,
         picture: 'https://qhubomedellin.com/binrepository/899x333/0c17/899d300/none/2697032980/PMLW/jorge-ivan-silletero_45364581_20240617003709.jpg',
         title: 'Es ciego y quiere ser silletero en la Feria de Flores',
         description: 'Unspecified focal traumatic brain injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, sequela',
         date: '20/06/2024',
         reporter: 'Cristian Tabares',
         section: 'Cultura',
         city: 'Medellín',
         isInternationalNote: false,
         hour: '09:50'
      },
      {
         id: 2,
         picture: 'https://estaticos.elcolombiano.com/binrepository/820x565/23c0/780d565/none/11101/NOQR/messi-y-diaz_45394092_20240620075928.jpg',
         title: 'Agéndese: fecha, hora y canales para ver los partidos de la Copa América',
         description: 'Transfusion associated circulatory overload',
         date: '20/06/2024',
         reporter: 'Cristian Tabares',
         section: 'Deportes',
         city: 'Medellín',
         isInternationalNote: false,
         hour: '10:50'
      },
      {
         id: 3,
         picture: 'https://qhubomedellin.com/binrepository/1067x480/33c0/1000d480/none/2697032980/WUXR/whatsapp-image-2024-06-17-at-5-21-41-pm-1_45372779_20240617183718.jpg',
         title: 'Paro de maestros en Medellín: marcharon pacíficamente por sus derechos; mientras que Bogotá colapsó',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '20/06/2024',
         reporter: 'Cristian Tabares',
         section: 'Deportes',
         city: 'Medellín',
         isInternationalNote: false,
         hour: '10:50'
      },
      {
         id: 4,
         picture: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=1500&dpr=2',
         title: 'Quentin Tarantino comienza las grabaciones en nuestro',
         description: 'Unspecified focal traumatic brain injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, sequela',
         date: '02/09/2021',
         reporter: 'Luis Jiménez',
         section: 'Cine',
         city: 'Medellin',
         isInternationalNote: true,
         hour: '16:10'
      },
      {
         id: 5,
         picture: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
         title: 'Se entregarán computadoras a cada escuea del pais',
         description: 'Transfusion associated circulatory overload',
         date: '01/06/2021',
         reporter: 'Leo Ramos',
         section: 'Educación',
         city: 'Santo Domingo',
         isInternationalNote: true,
         hour: '16:19'
      },
      {
         id: 6,
         picture: 'https://cdn.pixabay.com/photo/2015/03/03/05/56/avenue-656969_960_720.jpg',
         title: 'Todo un exito la exposición de culturas internacionales',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '28/03/2021',
         reporter: 'Maria Ramos',
         section: 'Cultura',
         city: 'Quito',
         isInternationalNote: true,
         hour: '17:19'
      },
      {
         id: 7,
         picture: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
         title: 'Hubo sorpresas en la feria del estado',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '28/03/2021',
         reporter: 'Héctor Zambrano',
         section: 'Cultura',
         city: 'Guadalajara',
         isInternationalNote: false,
         hour: '17:21'
      },
      {
         id: 8,
         picture: 'https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798_960_720.jpg',
         title: 'Se rehabilitan canchas para el público',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accidnt, initial encounter',
         date: '28/03/2021',
         reporter: 'Jorge Hernandez',
         section: 'Deportes',
         city: 'Guerrero',
         isInternationalNote: false,
         hour: '17:22'
      },
      {
         id: 9,
         picture: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
         title: '¡La orquesta sinfonica se presentará gratis!',
         description: 'Driver of pick-up truck or van injured in collision with car, pick-up truck or van in traffic accident, initial encounter',
         date: '28/03/2021',
         reporter: 'Cesar Martínez',
         section: 'Cultura',
         city: 'Xalapa',
         isInternationalNote: false,
         hour: '17:23'
      }
   ];

   constructor(
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      const idNote: Number = this.route.snapshot.params.id;
      if (idNote) {
         this.note = this.notes.find(itemNote => itemNote.id == idNote)!;
      }
   }
}
