package com.softarex.internship.services.responses;

import com.softarex.internship.model.Response;
import com.softarex.internship.repository.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ResponseServiceImpl implements ResponseService {
    @Autowired
    private ResponseRepository responseRepository;

    @Override
    public List<Response> getAll() {
        return responseRepository.findAll();
    }

    @Override
    public Response add(Response response) {
        return responseRepository.save(response);
    }
}
