/* global FontAwesomeConfig */
import fontawesome from '@fortawesome/fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';

fontawesome.config = {
  autoReplaceSvg: 'nest'
}
fontawesome.library.add(
    faCheck, faTrashAlt
);