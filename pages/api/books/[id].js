import { connectToDatabase } from "../../../mongoDB/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getPost(req, res);
    }

    case "PUT": {
      return updatePost(req, res);
    }

    case "DELETE": {
      return deletePost(req, res);
    }
  }
}

async function getPost(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    let id = req.query.id;
    console.log(id);
    // fetch the posts
    let posts = await db.collection("books").findOne({ _id: new ObjectId(id) });
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true,
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function updatePost(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    let id = req.query.id;
    let { title, author, imageUrl, price, featured } = req.body;

    // update the published status of the post
    await db.collection("books").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          title: title,
          author: author,
          image: imageUrl,
          price: price,
          featured: featured,
        },
      }
    );

    // return a message
    return res.json({
      message: "Post updated successfully",
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function deletePost(req, res) {
  try {
    // Connecting to the database
    let { db } = await connectToDatabase();
    let id = req.query.id;
    // Deleting the post
    await db.collection("books").deleteOne({
      _id: new ObjectId(id),
    });

    // returning a message
    return res.json({
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error) {
    // returning an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
