import tjLogo from "../../assets/images/tjLogo.png";

export default function Footer() {
	return (
		<div className="flex flex-col justify-center items-center text-center">
			<img src={tjLogo} className="w-20" />
			<p className="text-sm text-gray-400">
				Feito por Thaelen de Morais Lima - programadora top de linha que tá
				casando hoje :D
			</p>
		</div>
	);
}
