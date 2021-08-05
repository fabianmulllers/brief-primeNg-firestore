import { createAction, props } from '@ngrx/store';

export const show = createAction('[Dialogo Crear Editar] show',
props<{ mostrar: boolean }>());