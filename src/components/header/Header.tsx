import cx from "clsx";
import { useState } from "react";
import {
	Container,
	Avatar,
	UnstyledButton,
	Group,
	Text,
	Menu,
	Burger,
	rem,
	// useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLogout, IconSettings, IconChevronDown } from "@tabler/icons-react";
import "./header.css";

const user = {
	name: "John Doe",
	email: "johndoe@test.dev",
	image:
		"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

export function Header() {
	// const theme = useMantineTheme();
	const [opened, { toggle }] = useDisclosure(false);
	const [userMenuOpened, setUserMenuOpened] = useState(false);

	return (
		<div className='header'>
			<Container className='mainSection' size='md'>
				<Group justify='space-between'>
					<div>TODO</div>

					<Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />

					<Menu
						width={260}
						position='bottom-end'
						transitionProps={{ transition: "pop-top-right" }}
						onClose={() => setUserMenuOpened(false)}
						onOpen={() => setUserMenuOpened(true)}
						withinPortal
					>
						<Menu.Target>
							<UnstyledButton
								className={cx("user", {
									["userActive"]: userMenuOpened,
								})}
							>
								<Group gap={7}>
									<Avatar
										src={user.image}
										alt={user.name}
										radius='xl'
										size={20}
									/>
									<Text fw={500} size='sm' lh={1} mr={3}>
										{user.name}
									</Text>
									<IconChevronDown
										style={{ width: rem(12), height: rem(12) }}
										stroke={1.5}
									/>
								</Group>
							</UnstyledButton>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Label>Settings</Menu.Label>
							<Menu.Item
								leftSection={
									<IconSettings
										style={{ width: rem(16), height: rem(16) }}
										stroke={1.5}
									/>
								}
							>
								Account settings
							</Menu.Item>
							<Menu.Item
								leftSection={
									<IconLogout
										style={{ width: rem(16), height: rem(16) }}
										stroke={1.5}
									/>
								}
							>
								Logout
							</Menu.Item>
							{/* 
							<Menu.Divider />

							<Menu.Label>Danger zone</Menu.Label>
							<Menu.Item
								color='red'
								leftSection={
									<IconTrash
										style={{ width: rem(16), height: rem(16) }}
										stroke={1.5}
									/>
								}
							>
								Delete account
							</Menu.Item> */}
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Container>
		</div>
	);
}
