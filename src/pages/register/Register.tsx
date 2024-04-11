import {
	TextInput,
	PasswordInput,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Button,
} from "@mantine/core";
import "./register.css";

export function RegisterPage() {
	return (
		<Container size={420} my={40}>
			<Title ta='center' className='title'>
				Register
			</Title>
			<Text c='dimmed' size='sm' ta='center' mt={5}>
				Already have an account?{" "}
				<Anchor size='sm' component='button'>
					Login
				</Anchor>
			</Text>

			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				<TextInput label='Names' placeholder='John Doe' required />
				<TextInput label='Email' placeholder='you@mantine.dev' required />
				<PasswordInput
					label='Password'
					placeholder='Your password'
					required
					mt='md'
				/>
				<Button fullWidth mt='xl'>
					Register
				</Button>
			</Paper>
		</Container>
	);
}
