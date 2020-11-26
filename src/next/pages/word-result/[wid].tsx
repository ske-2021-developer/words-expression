import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { firestore } from '@firebase/firebaseFirestore'
import { wordList } from '@stores/word-store'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { WordData } from '@typings/word'

interface Props {
	wid: string
}

const PageLayout = styled.div`
	text-align: center;
`

const WordTitle = styled.h1`
	color: ${({ theme: { color } }) => color};
`

const WordMessagesContainer = styled.ul`
	color: ${({ theme: { color } }) => color};
`

const WordMessage = styled.li``

const WordResult = ({ wid }: Props): JSX.Element => {
	const [messages, setMessages] = useState<WordData[]>([])

	useEffect(() => {
		firestore
			.collection('words')
			.doc(wid)
			.onSnapshot(doc => {
				const docData = doc.data()

				setMessages(docData.data)
			})
	}, [])

	return (
		<PageLayout>
			<WordTitle>{wordList[wid]}</WordTitle>
			<WordMessagesContainer>
				{messages.map(({ message, timestamp }) => (
					<WordMessage key={timestamp.toMillis()}>{message}</WordMessage>
				))}
			</WordMessagesContainer>
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

export default WordResult
