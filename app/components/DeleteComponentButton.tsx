'use client'

import {useTransition} from 'react';
import {useRouter} from 'next/navigation';
import {deleteComponent} from "@/app/actions/componentActions";
import {Loader, Trash2} from "lucide-react";

export function DeleteComponentButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this component?')) {
      startTransition(async () => {
        const result = await deleteComponent(id);
        if (result.success) {
          alert(result.message);
          router.refresh(); // Refresh the page to update the component list
        } else {
          alert(result.message);
          console.error(result.error);
        }
      });
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 disabled:opacity-50"
    >
      {isPending ? <Loader className="w-4 h-4 animate-spin"/> : <Trash2 className="w-4 h-4"/>}
    </button>
  );
}