import CV from '../../assets/Portafolio.png';
import tasklist from '../../assets/task-list.png';
import Pokedex from '../../assets/pokedex.png';
import PokemonLink from '../../assets/pokemonlink.png';
import Shopping from '../../assets/shopping-cart.png';
import Matcha from '../../assets/Matcha.png';
import Profile from '../../assets/profile-card.png';
const Proyectos = [
	{
		title: 'Portafolio',
		Descripcion: 'Sito web que estan viendo en este momento',
		repo: 'https://github.com/GuillermoSM5/Portafolio',
		web: 'https://guillermo-cv.netlify.app/',
		image: CV,
	},
	{
		title: 'Matcha',
		Descripcion: 'Ejercicio de maquetacion web',
		repo: 'https://github.com/GuillermoSM5/Proyecto_Matcha',
		web: 'https://prueba-match.netlify.app',
		image: Matcha,
	},
	{
		title: 'Profile Card',
		Descripcion: 'Ejercicio de maquetacion con html y Sass',
		repo: 'https://github.com/GuillermoSM5/ProfileCard',
		web: 'https://profile-card-gsm.netlify.app/',
		image: Profile,
	},
	{
		title: 'Task-List',
		Descripcion:
			'Sito web echo con que te permite anotar las tareas a realizar y marcar las que ya estan completadas asi como ocultar las tareas completadas',
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
	{
		title: 'Shopping cart',
		Descripcion: 'Pequeña logica para simular un carrito de compras',
		repo: 'https://github.com/GuillermoSM5/shopping_cart',
		web: 'https://shooping-cart-practice.netlify.app',
		image: Shopping,
	},
];
export default Proyectos;
