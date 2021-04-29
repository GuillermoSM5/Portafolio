import CV from '../../assets/Portafolio.png';
import tasklist from '../../assets/task-list.png';
import Pokedex from '../../assets/pokedex.png';
import PokemonLink from '../../assets/pokemonlink.png';
const Proyectos = [
	{
		title: 'Portafolio',
		Descripcion: 'Sito web que estan viendo en este momento',
		repo: 'https://github.com/GuillermoSM5/Portafolio',
		web: 'https://twitter.com/home',
		image: CV,
	},
	{
		title: 'Task-List',
		Descripcion:
			'Sito web que te permite anotar las tareas a realizar y marcar las que ya estan completadas asi como ocultar las tareas completadas',
		repo: 'https://github.com/GuillermoSM5/task-list',
		web: 'https://task-list-gsm.netlify.app/',
		image: tasklist,
	},
	{
		title: 'Pokedex',
		Descripcion:
			'Busca cualquier pokemon por nombre o id y agregarlo a tu pokedex tambien puedes liberar a cualquier pokemon',
		repo: 'https://github.com/GuillermoSM5/pokedex',
		web: 'https://pokedex149.netlify.app/',
		image: Pokedex,
	},
	{
		title: 'Pokemon Link',
		Descripcion:
			'Pequeño ejercicio con el Api de pokemon en la seccion de blog',
		repo: 'https://github.com/GuillermoSM5/Blog',
		web: 'https://pokemon-select.netlify.app',
		image: PokemonLink,
	},
];
export default Proyectos;
