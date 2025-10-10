# TypeScript Types

## Utility Types

Types can be created from other Types, without having to redefine an entire Type. 

## Omit

(Omit)[https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys] - create a Type from another Type with fewer properties. 

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

