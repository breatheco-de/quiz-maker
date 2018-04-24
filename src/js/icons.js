/* global FontAwesomeConfig */
import fontawesome from '@fortawesome/fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
fontawesome.config = {
  autoReplaceSvg: 'nest'
};
fontawesome.library.add(
    faCheck, faTrashAlt, faPlusCircle, faDownload
);