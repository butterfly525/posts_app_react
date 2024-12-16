import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFeching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchCommentsById, isComLoading, ComError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, []);

    return (
        <div>
            <h1>Вы попали на страницу поста с id = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>
                    {post.id}. {post.title}
                </div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comment =>
                        <div style={{marginTop: 30}}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>)}
                </div>
            }
        </div>

    );
}

export default PostIdPage;