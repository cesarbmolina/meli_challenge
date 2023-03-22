import Image from "next/image";

/* styles */
import styles from '../../styles/Home.module.css'
import localStyles from "./nav.module.css"
import Search from "../search/search";
import Link from "next/link";

export interface onChangeI {
	onChange: (e: string) => void
}

const Nav = ({ onChange }: onChangeI) => {

	return (<>
		<div className={localStyles.navbar}>
			<div className={`${styles.container} ${localStyles.content}`}>
				<div className={localStyles.brand}>
					<Link href={"/"}>
						<Image
							className={localStyles.logo}
							src="/logo_ml.png"
							alt="ML"
							width={59}
							height={40}
							priority
							aria-label="ML"
						/>
					</Link>
				</div>
				<div className={localStyles.contentSearch}>
					<Search onSearchValue={(e: any) => onChange(e)} />
				</div>
			</div>
		</div>
	</>);
}

export default Nav;