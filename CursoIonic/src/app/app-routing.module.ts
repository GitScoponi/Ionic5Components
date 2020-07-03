import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/ComponentesVisuais/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/ComponentesVisuais/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'botoes',
    loadChildren: () => import('./pages/ComponentesVisuais/botoes/botoes.module').then( m => m.BotoesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/ComponentesVisuais/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/ComponentesVisuais/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/ComponentesVisuais/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/ComponentesVisuais/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/ComponentesVisuais/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/ComponentesVisuais/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pages/ComponentesVisuais/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/ComponentesVisuais/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/ComponentesVisuais/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/ComponentesVisuais/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/ComponentesVisuais/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinitescroll',
    loadChildren: () => import('./pages/ComponentesVisuais/infinitescroll/infinitescroll.module').then( m => m.InfinitescrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/ComponentesVisuais/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/ComponentesVisuais/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'progresbar',
    loadChildren: () => import('./pages/ComponentesVisuais/progresbar/progresbar.module').then( m => m.ProgresbarPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/ComponentesVisuais/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./pages/ComponentesVisuais/reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/ComponentesVisuais/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'tougle',
    loadChildren: () => import('./pages/ComponentesVisuais/tougle/tougle.module').then( m => m.TouglePageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./pages/ComponentesVisuais/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/ComponentesVisuais/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./pages/ComponentesVisuais/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./pages/ComponentesVisuais/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/ComponentesVisuais/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popouver',
    loadChildren: () => import('./pages/ComponentesVisuais/popouver/popouver.module').then( m => m.PopouverPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./pages/ComponentesVisuais/radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'animacao',
    loadChildren: () => import('./pages/ComponentesVisuais/animacao/animacao.module').then( m => m.AnimacaoPageModule)
  },
  {
    path: 'comp-visuais',
    loadChildren: () => import('./pages/comp-visuais/comp-visuais.module').then( m => m.CompVisuaisPageModule)
  },
  {
    path: 'comp-nativos',
    loadChildren: () => import('./pages/comp-nativos/comp-nativos.module').then( m => m.CompNativosPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/ComponentesNativos/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'text-speaker',
    loadChildren: () => import('./pages/ComponentesNativos/text-speaker/text-speaker.module').then( m => m.TextSpeakerPageModule)
  },
  {
    path: 'cons-api',
    loadChildren: () => import('./pages/cons-api/cons-api.module').then( m => m.ConsApiPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
