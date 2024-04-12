import "@mantine/core/styles.css";
import { MantineProvider, Paper } from "@mantine/core";
import { theme } from "./theme";
import { InputWithButton } from "./components/AddToDoInput";
import "./App.css";
import { Header } from "./components/header/Header";

export default function App() {
	const todos = [
		{
			id: 0,
			title: "todo1",
			isComplete: false,
		},
		{
			id: 1,
			title: "todo2",
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
			<Header />
			<div className='todo-container'>
				<Paper shadow='lg' radius='md' p='xl'>
					<div className='add-todo'>
						<InputWithButton />
					</div>
					<div className='todo-list'>
						{todos.map((todo) => (
							<div key={todo.id} className='todo-item'>
								<input
									id={`${todo.id}`}
									type='checkbox'
									name='todoItem'
									value={todo.id}
									defaultChecked={todo.isComplete ? true : false}
									onChange={(e) => {
										console.log(e.target.checked);
									}}
								/>
								<label htmlFor={`${todo.id}`}>{todo.title}</label>
								<br></br>
							</div>
						))}
					</div>
				</Paper>
			</div>
		</MantineProvider>
	);
}
