import michisLogo from '../../assets/michi.svg';
import {
	IconBrandYoutubeFilled as youtube,
	IconBrandGooglePlay as playstore,
	IconBrandXFilled as twitter,
	IconBrandLinkedinFilled as linkedin,
	IconBrandDiscordFilled as discord
} from "@tabler/icons-preact"
import './style.css';

export function Home() {
	return (
		<div class="home">
			<img class="logo" src={michisLogo} alt="Michis logo" height="360" width="360" />
			<h1>This place is under construction </h1>
			<section>
				<Social
					title="Playstore account"
					icon={playstore}
					href="https://play.google.com/store/apps/dev?id=7991465988656776525"
				/>
				<Social
					title="Youtube Channel"
					icon={youtube}
					href="https://www.youtube.com/@MichisandGames"
				/>
				<Social
					title="X (formerly twitter)"
					icon={twitter}
					href="https://x.com/MyChemSim"
				/>
				<Social
					title="LinkendIn profile"
					icon={linkedin}
					href="#"
				/>
				<Social
					title="Discord server"
					icon={discord}
					href="#"
				/>
			</section>
		</div>
	);
}

function Social(props) {
	return (
		<a  class="resource" href={props.href} target="_blank" title={props.title}>
			<props.icon size={48} />
		</a>
	);
}
