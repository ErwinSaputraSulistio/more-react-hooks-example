import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UseCallbackExample, UseMemoExample, UseRefExample, NotFound } from "./pages"

export default function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/callback-example" element={ <UseCallbackExample/> }/>
				<Route path="/memo-example" element={ <UseMemoExample/> }/>
				<Route path="/ref-example" element={ <UseRefExample/> }/>
				<Route path="*" element={ <NotFound/> }/>
			</Routes>
		</BrowserRouter>
  	)
}