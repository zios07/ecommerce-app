package com.mezosproject.service;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;

import com.mezosproject.exception.NotFoundException;
import com.mezosproject.model.Attachment;

public interface AttachmentService {

	Attachment create(Attachment attachment);
	
	List<Attachment> createAll(List<Attachment> attachments);

	Attachment update(Attachment attachment);

	Attachment findByID(String ID) throws NotFoundException;

	List<Attachment> getAttachments();

	Page<Attachment> getAttachments(int page, int size);

	List<Attachment> getEntityAttachment(String className, Object id);

	List<Attachment> getEntityAttachment(String className, Object id, int page, int size);

	List<Attachment> getAttachmentsByMetadata(Map<String, Object> metadata);

}
