import { useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/firestore'

import { firestore } from '@firebase/firebaseFirestore'

import type { GetStaticPaths, GetStaticProps } from 'next'

interface Props {
	wid: string
}

const wordList: string[] = ['Youth', 'Suankularb', 'Hello World', 'Test']

const PageLayout = styled.div`
	text-align: center;
`

const WordTitle = styled.h1`
	color: ${({ theme: { color } }) => color};
`

const WordForm = styled.form``

const InputBox = styled.input``

const SubmitButton = styled.input``

const WordId = ({ wid }: Props): JSX.Element => {
	const [message, setMessage] = useState<string>('')

	const handleMessage = (event: ChangeEvent<HTMLInputElement>) => {
		const textInput = event.target.value

		setMessage(textInput)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		firestore
			.collection('words')
			.doc(wid)
			.update({
				data: firebase.firestore.FieldValue.arrayUnion({
					message,
					timestamp: firebase.firestore.Timestamp.fromDate(new Date())
				})
			})
	}

	return (
		<PageLayout>
			<WordTitle>{wordList[wid]}</WordTitle>
			<WordForm onSubmit={handleSubmit}>
				<InputBox type='text' value={message} onChange={handleMessage} />
				<SubmitButton type='submit' />
			</WordForm>
		</PageLayout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = wordList.map((_, index) => ({
		params: { wid: `${index}` }
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const { wid } = context.params as { wid: string }

	return {
		props: { wid }
	}
}

export default WordId
