// BlogPostForm.tsx
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles

const BlogPostForm: React.FC = () => {
const [content, setContent] = useState<string>('');
const [draftSaved, setDraftSaved] = useState<boolean>(false);
const [markdownMode, setMarkdownMode] = useState<boolean>(false);

// Load content from local storage on component mount
useEffect(() => {
  const savedContent = localStorage.getItem('blogPostContent');
  if (savedContent) {
    setContent(savedContent);
  }
}, []);

// Save content to local storage whenever it changes
useEffect(() => {
  localStorage.setItem('blogPostContent', content);
}, [content]);

const handleSaveDraft = async () => {
  try {
    // Simulate saving draft to the backend
    const response = await fetch('your-api-endpoint/saveDraft', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    });

    if (response.ok) {
      console.log('Draft saved:', content);
      setDraftSaved(true);
    } else {
      console.error('Error saving draft');
    }
  } catch (error) {
    console.error('Error saving draft:', error);
  }
};

const handlePreview = () => {
  // Simulate previewing the blog post
  // You might want to open a modal or navigate to a preview page
  console.log('Preview:', content);
  // Replace this with your actual logic for displaying a preview
};

const handlePublish = async () => {
  try {
    const isNewPost = !content.startsWith('/blogs/'); // Check if the content is for a new post

    if (isNewPost) {
      // Save content for a new post
      const response = await fetch('your-api-endpoint/saveNewPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
        }),
      });

      if (response.ok) {
        console.log('New post published:', content);
        setDraftSaved(false); // Reset draftSaved state
      } else {
        console.error('Error saving new post');
      }
    } else {
      // Content corresponds to an existing post
      // You might want to show a preview or navigate to an edit page
      console.log('Existing post published:', content);

      // Simulate navigating to an edit page with the content
      // You can replace this with your actual navigation logic
      // For example, redirect to a specific edit route
      // history.push(`/edit/${postId}`);
    }
  } catch (error) {
    console.error('Error publishing post:', error);
  }
};
  
  return (
    <div className="flex flex-col w-full font-Poppins text-base-blacks-var-1 ">
      <div className='bg-base-blacks-var-2 text-base-whites-var-1 text-wide-screen-body-4x'>
        <label className='flex gap-2'>
          <input
            type="checkbox"
            checked={!markdownMode}
            onChange={() => setMarkdownMode(!markdownMode)}
          />
          Markdown Mode
        </label>
      </div>

      {markdownMode ? (
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      ) : (
        <ReactQuill
          theme="snow"
          value={content}
          onChange={(value) => setContent(value)}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
              ['clean'],
            ],
          }}
        />
      )}
      <div className="flex font-Poppins text-base-whites-var-1 bg-base-blacks-var-2 overflow-hidden">
        <div>
          <button onClick={handleSaveDraft} className='cursor-pointer font-inherit p-2 text-wide-screen-body-4x bg-base-none text-base-greys-var-1 hover:text-base-whites-var-1'>Save Draft</button>
          {draftSaved && <span>Draft saved!</span>}
        </div>

        <div>
          <button onClick={handlePreview} className='cursor-pointer font-inherit p-2 text-wide-screen-body-4x bg-base-none text-base-greys-var-1 hover:text-base-whites-var-1'>Preview</button>
        </div>

        <div>
          <button onClick={handlePublish} className='cursor-pointer font-inherit p-2 text-wide-screen-body-4x bg-base-none text-base-greys-var-1 hover:text-base-whites-var-1'>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
