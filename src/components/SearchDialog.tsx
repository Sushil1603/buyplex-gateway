
import { useState, useEffect } from 'react';
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { products } from '@/lib/products';

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Reset search query when dialog is closed
  useEffect(() => {
    if (!open) {
      setSearchQuery('');
    }
  }, [open]);
  
  // Handle selecting a product
  const handleSelect = (productId: string) => {
    navigate(`/product/${productId}`);
    onOpenChange(false);
  };
  
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <div className="flex items-center border-b px-3">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <CommandInput
          placeholder="Search products..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="p-1">
            <X className="h-4 w-4 opacity-50" />
          </button>
        )}
      </div>
      <CommandList>
        {filteredProducts.length === 0 && <CommandEmpty>No products found.</CommandEmpty>}
        <CommandGroup heading="Products">
          {filteredProducts.map((product) => (
            <CommandItem
              key={product.id}
              onSelect={() => handleSelect(product.id)}
              className="flex items-center gap-2 py-2"
            >
              <div className="h-10 w-10 overflow-hidden rounded bg-secondary/20">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">{product.name}</span>
                <span className="text-xs text-muted-foreground">${product.price.toFixed(2)}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
