
// 1. Define PageProps without restrictive index signature
interface PageProps {
    title: string;
    description: string;
    // Add other properties as needed
    [key: string]: string | number | boolean; // Allow string, number, or boolean types for any property
  }
  
  // 2. Define scrollsectionType with scrollId
  interface scrollsectionType {
    scrollId: string; // Add scrollId to this type
  }
  
  // 3. Define the Diff type to combine PageProps and scrollsectionType, omitting scrollId from PageProps
  type Diff<T, U, K extends keyof T> = Omit<T, K> & U;
  
  // 4. Create the checkFields function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function checkFields<T>() {
    // Implementation logic
  }
  
  // 5. Correctly call checkFields with Diff type
  checkFields<Diff<PageProps, scrollsectionType, 'scrollId'>>();
  
  
  
  
  