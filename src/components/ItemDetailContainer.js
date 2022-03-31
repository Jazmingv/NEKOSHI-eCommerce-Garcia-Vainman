import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  return (
    <div className="container">
      <div className="box">
        <ItemDetail
          title={"The Hobbit"}
          img={"https://images-na.ssl-images-amazon.com/images/I/71KqBbH93lL.jpg"}
          price={12.99}
          desc={
            "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Written for J.R.R. Tolkien's own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent."
          }
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;