import React, {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";

function CommentDetails() {
    const [comment, setComment] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
}

export default CommentDetails;