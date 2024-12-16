'use client'

import {useState, useTransition} from 'react';
import {useRouter} from 'next/navigation';
import {deleteComponent} from "@/app/actions/componentActions";
import {LoaderCircle, Lock, Trash2} from "lucide-react";

export function DeleteComponentButton({ id, status }: { id: number, status: boolean }) {
  const [isPending, startTransition] = useTransition();
  const [isConfirming, setIsConfirming] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }

    startTransition(async () => {
      const result = await deleteComponent(id);
      if (result.success) {
        router.refresh(); // Refresh the page to update the component list
      } else {
        alert(result.message);
        console.error(result.error);
      }
      setIsConfirming(false);
    });
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };


  if (isConfirming) {
    return (
      <div className="flex space-x-2">
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 disabled:opacity-50"
          aria-label="Confirm deletion"
        >
          {isPending ? <LoaderCircle className="w-4 h-4 animate-spin"/>  : 'Confirm'}
        </button>
        <button
          onClick={handleCancel}
          className="px-3 py-1 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
          aria-label="Cancel deletion"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleDelete}
      disabled={status}
      className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 disabled:opacity-50"
      aria-label="Delete component"
    >
      {status ? <Lock className="w-4 h-4"/> : <Trash2 className="w-4 h-4"/>}
    </button>
  );
}
