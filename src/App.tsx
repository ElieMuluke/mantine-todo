import "@mantine/core/styles.css";
import { Checkbox, MantineProvider, Paper, Title } from "@mantine/core";
import { theme } from "./theme";
import { InputWithButton } from "./components/AddToDoInput";
import "./App.css";

export default function App() {
	const todos = [
		{
			id: 0,
			title: "todo1",
			isComplete: false,
		},
		{
			id: 1,
			title: "todo1",
			isComplete: true,
		},
		{
			id: 2,
			title: "todo2",
			isComplete: false,
		},
	];
	return (
		<MantineProvider theme={theme}>
			<div className='todo-container'>
				<Paper shadow='lg' radius='md' p='xl'>
					<div className='header'>
						<Title order={1}>TODO</Title>
					</div>
					<div className='add-todo'>
						<InputWithButton />
					</div>
					<div className='todo-list'>
						{todos.map((todo) => (
							<div className='todo-item'>
								<Checkbox
									checked={todo.isComplete}
									onChange={(event) => {}}
									label={todo.title}
								/>
							</div>
						))}
					</div>
				</Paper>
			</div>
		</MantineProvider>
	);
}
