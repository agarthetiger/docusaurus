# TypeScript Types

In TypeScript, types are not 1:1 with their compile-time declarations. It's like Duck Typing. If an object has the right properties and methods it can be used as an instance of that type.

## Utility Types

Types can be created from other Types, without having to redefine an entire Type. 

## Omit

[Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) - create a Type from another Type with fewer properties. 

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
```

